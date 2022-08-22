import {
  create,
  enforce,
  test,
  SuiteRunResult,
  eager,
  optional,
  each,
} from 'vest';

const dateRegexp = /^\d{2}\/\d{2}\/\d{4}$/g;

const suite = create((data = {}) => {
  eager();

  test('gender', () => {
    enforce(data.gender).message('Gender must be required').isNotBlank();
  });

  test('gender', 'Only m or w', () => {
    enforce(data.gender).inside(['m', 'w']);
  });

  test('birthday', 'Must be required', () => {
    enforce(data.birthday).isNotBlank();
  });

  test('birthday', 'Not valid date', () => {
    enforce(data.birthday).matches(dateRegexp);
  });

  test('last_name', () => {
    enforce(data.last_name)
      .message('Must be required')
      .isNotBlank()
      .message('Must be greater than 2 characters')
      .greaterThan(2);
  });

  optional({
    middle_name: () => data.without_middle_name,
  });

  test('middle_name', 'Required', () => {
    enforce(data.middle_name).isNotBlank();
  });

  each(data.works, (work: Record<string, unknown>, idx) => {
    const testKey = idx.toString();

    test(
      `works[${idx}].title`,
      () => {
        enforce(work.title).message('Work title must be required').isNotBlank();
      },
      `works[${idx}].title`
    );

    test(
      `works[${idx}].date_start`,
      () => {
        enforce(work.date_start)
          .message('Work start date must be required')
          .isNotBlank()
          .message('Work start date must be valid date')
          .matches(dateRegexp);
      },
      `works[${idx}].date_start`
    );

    test(
      `works[${idx}].date_end`,
      () => {
        enforce(work.date_end)
          .message('Work end date must be required')
          .isNotBlank()
          .message('Work end date must be valid date')
          .matches(dateRegexp);
      },
      `works[${idx}].date_end`
    );
  });
});

interface AggregatedError {
  path: string;
  errors: string[];
}

const vestAdapter = <T = unknown>(suite: (val: T) => SuiteRunResult) => ({
  async validate(value: T) {
    const result = suite(value);

    console.log({ result });

    if (!result.hasErrors()) {
      return true;
    }

    const errors = Object.keys(result.tests).map((fieldName) => ({
      path: fieldName,
      errors: result.tests[fieldName].errors,
    }));

    const error: Error & { inner?: AggregatedError[] } = new Error('Invalid');

    error.name = 'ValidationError';
    error.inner = errors;

    throw error;
  },
});

export const validate = vestAdapter(suite);
