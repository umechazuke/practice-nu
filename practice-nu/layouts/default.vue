<template>
  <v-app id="inspire">
    <v-navigation-drawer
      permanent
      class="side-drawer"
      rail
    >
      <v-list-item link absolute>
        <v-tooltip>
          <template>
            <NuxtLink to="/"><v-icon class="list-icon">mdi-home</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link>
        <v-tooltip>
          <template>
            <NuxtLink to="/estimate"><v-icon class="list-icon">mdi-chart-bell-curve</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
      <v-list-item link>
        <v-tooltip>
          <template>
            <NuxtLink to="/dictation"><v-icon class="list-icon">mdi-ear-hearing</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
      <v-list-item link>
        <v-tooltip>
          <template>
            <NuxtLink to="/translation"><v-icon class="list-icon">mdi-translate</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
      <v-list-item link>
        <v-tooltip>
          <template>
            <NuxtLink to="/kobun_tango"><v-icon class="list-icon">mdi-syllabary-hiragana</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
      <v-list-item link>
        <v-tooltip text="暗唱例文">
          <template>
            <NuxtLink to="/recition"><v-icon class="list-icon">mdi-thought-bubble</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
      <v-list-item link>
        <v-tooltip text="漢文">
          <template>
            <NuxtLink to="/kanbun"><v-icon class="list-icon">mdi-ideogram-cjk</v-icon></NuxtLink>
          </template>
        </v-tooltip>
      </v-list-item>
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
</style>