// 通过模块化js管理各个页面之间的状态
// TODO: stage side page也可以用这种方法来处理
import { reactive, ref } from 'vue';
// MENTION：一定要采用响应式，否则app中不会刷新状态
export const pagesController = reactive({
    learnPage: false,
    readingPage: false
});
export function controlPages(currentPage) {
    // 首先将所有页面设置为false,注意解构赋值，改变原职。
    Object.assign(pagesController, { learnPage: false, readingPage: false });
    // 然后将当前页面设置为true
    pagesController[currentPage] = true;
}



// 管理阅读的时候，是否滑动到了文章的末尾
export const readingScrollViewScrollDown = ref(false);
