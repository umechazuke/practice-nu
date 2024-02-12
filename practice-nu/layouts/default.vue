<template>
  <v-app id="inspire">
    <v-navigation-drawer
      permanent
      class="side-drawer"
      rail-width="48px"
      rail
    >
      <NuxtLink class="side-list-link" to="/">
        <v-list-item class="side-list-item" nav absolute>
          <v-icon class="list-icon">mdi-home</v-icon>
        </v-list-item>
      </NuxtLink>
      <v-divider></v-divider>
      <NuxtLink class="side-list-link" to="/statistics">
        <v-list-item class="side-list-item" nav> 
          <v-icon class="list-icon">mdi-chart-bell-curve</v-icon>
          <v-tooltip activator="parent">統計的な推測</v-tooltip>
        </v-list-item>
      </NuxtLink>
      <NuxtLink class="side-list-link" to="/dictation">
        <v-list-item class="side-list-item" nav>
            <v-icon class="list-icon">mdi-ear-hearing</v-icon>
            <v-tooltip activator="parent">ディクテーション</v-tooltip>
        </v-list-item>
      </NuxtLink>
      <NuxtLink class="side-list-link" to="/translation">
        <v-list-item class="side-list-item" nav>
            <v-icon class="list-icon">mdi-translate</v-icon>
            <v-tooltip activator="parent">基礎英</v-tooltip>
        </v-list-item> 
      </NuxtLink>
      <NuxtLink class="side-list-link" to="/kobun_tango">
        <v-list-item class="side-list-item" nav>
          <v-icon class="list-icon">mdi-syllabary-hiragana</v-icon>
          <v-tooltip activator="parent">古文単語</v-tooltip>
        </v-list-item>
      </NuxtLink>
      <NuxtLink class="side-list-link" to="/recition">
        <v-list-item class="side-list-item" nav>
            <v-icon class="list-icon">mdi-thought-bubble</v-icon>
            <v-tooltip activator="parent">暗唱例文</v-tooltip>
        </v-list-item>
      </NuxtLink>
      <NuxtLink class="side-list-link" to="/kanbun">
        <v-list-item class="side-list-item" nav>
          <v-icon class="list-icon">mdi-ideogram-cjk</v-icon>
          <v-tooltip activator="parent">漢文</v-tooltip>
        </v-list-item>
      </NuxtLink>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style>
.list-icon {
  color: black;
}

.side-list-item {
  height: fit-content;
  text-align: center;
}

.side-list-item:hover {
  background-color: aliceblue;
}

.side-list-item:active {
  background-color: rgb(226, 238, 250);
}
</style>