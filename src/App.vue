<template>
    <div id="app">
        <demo1>组件通信</demo1>
    </div>
</template>

<script>
    import demo1 from '@/views/demo1';
    // import demo2 from '@/views/demo2';
    export default {
        name: 'app',
        provide: {
            woniu: '我是骚气的大圣老师',
        },
        components: {
            demo1,
            // demo2
        },
        data() {
            return {};
        }
    };
</script>
<style>

</style>