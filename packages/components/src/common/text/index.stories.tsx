/** packages */
import { Meta } from '@storybook/html'

/** component */
import { Text } from '.'

/** props */
import { TextProps } from './types'

/** story settings */
export default {
  title: 'Example/Text',
  args: {
    children: 'Hello World',
  },
} as Meta

/** story render */
const Template = (args: TextProps) => <Text {...args} />

/** exports */
export { Template }
