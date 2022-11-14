import { defineComponent,ref } from "vue";
export const App = defineComponent({
    setup(){
        const refCount = ref(0)
        const onClick = ()=>{
            refCount.value += 1 
        }
        return () => <>
        <div>
            {refCount.value}
        </div>
        <div>
            <button onClick={onClick}>+1</button>
        </div>
        </>
import "./App.scss"
import { defineComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";

export const App = defineComponent({
    setup(){
        return () => (
        <div class="page">
           <RouterView/>
        </div>
        )

    }
})

