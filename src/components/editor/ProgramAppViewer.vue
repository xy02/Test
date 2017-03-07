<template lang="pug">
    div(:style="{'min-width': width +'px', 'min-height':height + 'px', 'border-color': color}",class="app-viewer")
        div(:style="{background:color}",class="app-viewer-title",:class="{'app-viewer-selected': isSelected}",@click="select") 
            span {{$t('program')}}
            br(v-show="isSelected")
            span(v-show="isSelected") {{width}}*{{height}} 
        div(v-if="!app.app",:style="{'line-height':height+'px', 'min-height':height+'px', 'min-width': width +'px'}" style="overflow:hidden; text-align:center") {{$t('empty')}}
        //- component(v-else,:is="app.app.type + 'Viewer'",:width="width",:height="height",:app="app.app")
</template>
<style src='./editor.css'></style>
<script>
import { mapState } from 'vuex'
// import ImageAppViewer from './image-app-viewer.vue'
// import HorizontalAppViewer from './horizontal-app-viewer.vue'

export default {
    name: 'ProgramAppViewer',
    data(){
        return {color:'black'}
    },
    props: {
        width:Number,
        height:Number,
        app: Object,
    },
    components:{
        // EmptyAppViewer,
        // ImageAppViewer,
        // HorizontalAppViewer,
    },
    computed:mapState({
        isSelected(state){
            return state.editor.selectedApp === this.app
        }
    }),
    methods:{
        select(){

        }
    }
}
</script>