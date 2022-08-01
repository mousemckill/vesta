import * as yup from 'yup';

const dateRegexp = /^\d{2}\/\d{2}\/\d{4}$/g;

const dateSchema = yup.string().ensure().matches(dateRegexp);

export const passportFormSchema = yup.object({
  gender: yup.string().nullable().required().oneOf(['m', 'w']),
  birthday: yup.string().required().matches(dateRegexp),
  last_name: yup.string().required().min(2),
  first_name: yup.string().required().min(2),
  middle_name: yup.string().when('without_middle_name', {
    is: true,
    then: (schema) => schema.optional(),
    otherwise: (schema) => schema.required(),
  }),
  works: yup.array().of(
    yup.object({
      title: yup.string().ensure().required(),
      company: yup.string().ensure().required(),
      date_start: dateSchema.required(),
      date_end: dateSchema
        .test({
          name: 'end-date',
          message: '${path} less than start date',
          exclusive: false,
          test: async (value: string, ctx: yup.TestContext) => {
            const { date_start } = ctx.parent as { date_start: string };

            const startDateIsValid = await dateSchema.isValid(date_start);
            const endDateIsValid = await dateSchema.isValid(value);

            // skip validation
            if (!startDateIsValid || !endDateIsValid) {
              return true;
            }

            return new Date(value) > new Date(date_start);
          },
        })
        .required(),
    })
  ),
});
