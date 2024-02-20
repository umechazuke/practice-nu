<template>
  <v-app id="inspire">
    <v-main>
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
        <NuxtLink disabled class="side-list-link" to="/statistics">
          <v-list-item class="side-list-item" nav> 
            <v-icon class="list-icon">mdi-chart-bell-curve</v-icon>
            <v-tooltip activator="parent">統計的な推測</v-tooltip>
          </v-list-item>
        </NuxtLink>
        <NuxtLink disabled class="side-list-link" to="/dictation">
          <v-list-item class="side-list-item" nav>
              <v-icon class="list-icon">mdi-ear-hearing</v-icon>
              <v-tooltip activator="parent">ディクテーション</v-tooltip>
          </v-list-item>
        </NuxtLink>
        <NuxtLink disabled class="side-list-link" to="/translation">
          <v-list-item class="side-list-item" nav>
              <v-icon class="list-icon">mdi-translate</v-icon>
              <v-tooltip activator="parent">基礎英</v-tooltip>
          </v-list-item> 
        </NuxtLink>
        <NuxtLink disabled class="side-list-link" to="/kobun-tango">
          <v-list-item class="side-list-item" nav>
            <v-icon class="list-icon">mdi-syllabary-hiragana</v-icon>
            <v-tooltip activator="parent">古文単語</v-tooltip>
          </v-list-item>
        </NuxtLink>
        <NuxtLink disabled class="side-list-link" to="/recition">
          <v-list-item class="side-list-item" nav>
              <v-icon class="list-icon">mdi-thought-bubble</v-icon>
              <v-tooltip activator="parent">暗唱例文</v-tooltip>
          </v-list-item>
        </NuxtLink>
        <NuxtLink disabled class="side-list-link" to="/kanbun">
          <v-list-item class="side-list-item" nav>
            <v-icon class="list-icon">mdi-ideogram-cjk</v-icon>
            <v-tooltip activator="parent">漢文</v-tooltip>
          </v-list-item>
        </NuxtLink>
        <NuxtLink  disabled class="side-list-list" to="/positional-notation">
          <v-list-item class="side-list-item" nav>
            <v-icon class="list-icon">mdi-hexadecimal</v-icon>
            <v-tooltip activator="parent">記数法(n進数;n∈N)</v-tooltip>
          </v-list-item>
        </NuxtLink>
      </v-navigation-drawer>

      <NuxtPage />

      <!--General Config Dialog-->
      <v-container>
      <v-btn class="config-dialog-btn" color="primary" icon="mdi-cog">
        <v-icon>mdi-cog</v-icon>
        <v-dialog
        class="config-dialog"
        v-model="model"
        activator="parent"
        >
            <v-sheet>
                <v-container>
                    <h1>設定</h1>
                    
                    <v-btn color="primary" block @click="model = false">閉じる</v-btn>
                </v-container>
            </v-sheet>
        </v-dialog>
    </v-btn>
    </v-container>

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

.config-dialog-btn {
  border-radius: 100%;
  position: fixed;
  bottom: 32px;
  right: 32px;
}

.side-list-item:hover {
  background-color: aliceblue;
}

.side-list-item:active {
  background-color: rgb(226, 238, 250);
}

</style>

<script lang="ts">
export default {
    props: {
        fullscreen: {
            type: Boolean,
            default: false
        },
        persistent: {
            type: Boolean,
            default: false
        },
        width: {
            type: [String, Number]
        },
    },
    data() {
        return {
            model: false
        }
    },
    methods: {
        setVisible(value: boolean) {
            this.model = value;
        }
    }
}
</script>