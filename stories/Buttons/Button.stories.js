import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const OK = Template.bind({});
OK.args = {
  label: 'OK',
  backgroundColor:'limegreen'
};

export const ERROR = Template.bind({});
ERROR.args = {
  label: 'ERROR',
  backgroundColor:'red'
};

