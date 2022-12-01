import { defineComponent, PropType } from 'vue'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import { Icon } from './Icon'
export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>
        <Center class={s.welcome1_wrapper}>
          <Icon name="welcome1" class={s.welcome1} />
        </Center>
        <p class={s.text}>敬请期待</p>
      </div>
    )
  }
})