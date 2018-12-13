<template>
  <div id="homepage">
    <Introduce-Content></Introduce-Content>
    <Knowledge-Content></Knowledge-Content>
    <Skill-Content></Skill-Content>
    <Work-Content></Work-Content>
    <Contact-Content></Contact-Content>
  </div>
</template>
<script>
import IntroduceContent from './Contents/IntroduceContent.vue'
import KnowledgeContent from './Contents/KnowledgeContent.vue'
import SkillContent from './Contents/SkillContent.vue'
import WorkContent from './Contents/WorkContent.vue'
import ContactContent from './Contents/ContactContent.vue'
export default {
  name: 'homepage',
  components: {
    IntroduceContent,
    KnowledgeContent,
    SkillContent,
    WorkContent,
    ContactContent
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
