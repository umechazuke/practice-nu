<template>
    <v-app>
        <config-dialog>
            <h1 class="dialog-title">Configuration</h1>
            <v-checkbox label="Test" color="accent" hide-details></v-checkbox>
        </config-dialog>
        <v-col>
            
        </v-col>
    </v-app>
</template>

<script>
import ConfigDialog from "@/components/config-dialog.vue"

export default {
    components: {
        ConfigDialog
    }
}
</script>