<template>
    <v-app>
        <v-dialog
            v-model="configVisible"
            scrollable fullscreen 
            persistent :overlay="false"
            max-width="500px"
            transition="dialog-transition"
        >
            
        </v-dialog>
    </v-app>
</template>

<script lang="ts">
export default {
    data() {
        return {
            configVisible: false,
        };
    },
    methods: {
        openDialog() {
            this.configVisible = true;
        },
        closeDialog() {
            this.configVisible = false;
        }
    }
}
</script>