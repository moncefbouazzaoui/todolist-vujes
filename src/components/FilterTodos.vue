<template>
    <ul class="filters">
        <li><a href="javascript:void(0)" @click="setSelectedFilter('all')" class="selected">All</a></li>
        <li><a href="javascript:void(0)" @click="setSelectedFilter('active')" class="">Uncomplete</a></li>
        <li><a href="javascript:void(0)" @click="setSelectedFilter('completed')" class="">Completed</a></li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'FilterTodos',
        data() {
            return {
                selectedFilter: 'all'
            }
        },
        computed: mapGetters(['allTodos', 'completed', 'uncompleted'])
    }
</script>
