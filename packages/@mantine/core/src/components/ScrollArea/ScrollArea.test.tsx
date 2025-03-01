import { tests } from '@mantine-tests/core';
import { ScrollArea, ScrollAreaProps, ScrollAreaStylesNames } from './ScrollArea';

const defaultProps: ScrollAreaProps = {
  type: 'always',
  children: 'test',
};

describe('@mantine/core/ScrollArea', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ScrollArea',
    stylesApiSelectors: ['root', 'viewport'],
  });
});

describe('@mantine/core/ScrollAreaAutosize', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ScrollAreaAutosize',
  });
});
