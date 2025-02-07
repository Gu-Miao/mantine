import React from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Button, Text, Group } from '@mantine/core';

const code = `
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
