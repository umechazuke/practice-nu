<template>
    <v-app>
        <v-col>
            <v-card>Hello Nuxt!</v-card>
            <v-icon>{{ iconAccount }}</v-icon>
        </v-col>
    </v-app>
</template>

<script>
import { mdiAccount } from "@mdi/js"

export default {
    data: () => ({
        iconAccount: mdiAccount
    }),
}
</script>