import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import { Navbar } from '../shared/Navbar';
import { Overlay } from '../shared/Overlay';
import s from './StartPage.module.scss';
export const StartPage = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    return () => (
      <MainLayout>{
        {
          title: () => '柿子记账',
          icon: () => <Icon name="logo" class={s.navIcon} onClick={onClickMenu} />,
          default: () => <>
            <Center class={s.welcome1_wrapper}>
              <Icon name="welcome1" class={s.welcome1} />
            </Center>
            <div class={s.button_wrapper}>
              <RouterLink to="/items/create">
                <Button class={s.button}>开始记账</Button>
              </RouterLink>
            </div>
            <RouterLink to="/items/create">
              <FloatButton iconName='add' />
            </RouterLink>
            {refOverlayVisible.value &&
              <Overlay onClose={() => refOverlayVisible.value = false} />
            }
          </>
        }
      }</MainLayout>
    )
  }
})