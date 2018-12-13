<template>
  <div id="homepage">
    <Introduce></Introduce>
    <Knowledge></Knowledge>
    <Skill></Skill>
    <Contact></COntact>
  </div>
</template>
<script>
import Introduce from './Contents/IntroduceContent.vue'
import Knowledge from './Contents/KnowledgeContent.vue'
import Skill from './Contents/SkillContent.vue'
import Contact from './Contents/ContactContent.vue'
export default {
  name: 'homepage',
  components: {
    Introduce,
    Knowledge,
    Skill,
    Contact
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
#homepage {
  flex-grow: 1;
}
</style>
