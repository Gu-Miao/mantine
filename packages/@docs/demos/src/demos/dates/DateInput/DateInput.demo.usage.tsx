import React, { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';
import { DateInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput value={value} onChange={setValue} label="Date input" placeholder="Date input" />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
