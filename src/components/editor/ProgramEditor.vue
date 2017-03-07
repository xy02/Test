<template lang="pug">
div(v-if='program')
    div
        b {{$t('program.name')}}
        input(v-model="program.name")
    div
        b {{$t('width')}}
        input(v-model.number="program.width" type="number")
    div
        b {{$t('height')}}
        input(v-model.number="program.height" type="number")
    program-app-viewer(:width="program.width",:height="program.height",:app="program",style="")
    //- component(:is="selectedApp.type + 'Manager'", :selected="selectedApp",:viewer="selectedViewer")
    //- div
    //-     button(@click="save") {{$t('save')}}
</template>
<script>
import ProgramAppViewer from './ProgramAppViewer.vue'
// import ProgramAppManager from './program-app-manager.vue'
// import ImageAppManager from './image-app-manager.vue'
// import HorizontalAppManager from './horizontal-app-manager.vue'
import { mapState } from 'vuex'

import types from '../../store/editor/types'

export default {
    name: 'ProgramEditor',
    computed: mapState({
        program: state => state.editor.program,
        selectedApp:'selectedApp',
        selectedAppItem:'selectedAppItem',
    }),

    components:{
        ProgramAppViewer,
        // ProgramAppManager,
        // ImageAppManager,
        // HorizontalAppManager,
    },
    created() {
        let self = this
        console.log('editor on created')
        //test
        setTimeout(()=>{
            self.$store.commit(types.PROGRAM_ON_LOADED, {type:'ProgramApp', width:500, height:300, 
                name:'new',
                app:{type:'HorizontalApp',items:[
                    {width: 200, app:{type:'ImageApp', src:'http://192.168.8.99:8765/bk.jpg'}},
                    {width: 300, app:{type:'ImageApp', src:'http://192.168.8.99:8765/aips3.png'}},
                ]} 
            })
        },1000)
    },
    // destroyed(){
    //     bus.$off()
    // },
    // watch: {
    //     program: {
    //         handler: function (val, oldVal) {
    //             console.log('aips_program on change')
    //             let json = JSON.stringify(val)
    //             if (json != localStorage.aips_program)
    //                 localStorage.aips_program = json
    //         },
    //         deep: true
    //     }
    // },
    // methods: {
    //     save() {
    //         //dbClient.save
    //         localStorage.removeItem('aips_program')
    //         this.$router.push('/')
    //     },
    // }
}

</script>