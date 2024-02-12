<template>
    <v-container>
        <v-btn class="config-dialog-btn" color="primary" icon>
            <v-icon>mdi-cog</v-icon>
            <v-dialog
            class="config-dialog"
            v-model="model"
            activator="parent"
            >
                <v-sheet>
                    <v-container>
                        <h1>設定</h1>
                        <slot></slot>
                        <v-btn color="primary" block @click="model = false">閉じる</v-btn>
                    </v-container>
                </v-sheet>
            </v-dialog>
        </v-btn>
    </v-container>
</template>

<style>
.config-dialog-btn {
    border-radius: 100%;
    position: fixed;
    bottom: 32px;
    right: 32px;
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