import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}

export const hidePickedOptions: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
