<template>
    <div class="about">
        <h3>{{msg}}</h3>
        使用了以下技术<br>
        vue2 + webpack + vue-router + vue-resource
    </div>
</template>


<script>
// 默认配置
export default {
    data() {
        return {
            msg:'关于'
        }
    }
}
</script>
