<template>
  <Modal v-if="modals.info && availableRoles.length" @close="close">
    <h3>
      Choose a character
    </h3>
    <ul class="tokens">
      <li
        v-for="role in availableRoles"
        :class="[role.team]"
        :key="role.id"
        @click="setRole(role)"
      >
        <Token :role="role" />
      </li>
    </ul>
  </Modal>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Modal from "./Modal";
import Token from "../Token";

export default {
  components: { Token, Modal },
  props: [],
  computed: {
    availableRoles() {
      const availableRoles = [];
      const players = this.$store.state.players.players;
      const roles = this.$store.state.roles;
      const travel = this.$store.state.otherTravelers;
      travel.forEach(role => {
        if (players.some(player => player.role.id === role.id)) {
          availableRoles.push(role);
        }
      });
      roles.forEach(role => {
        if (role.team !== "traveler") {
          availableRoles.push(role);
        } else if (players.some(player => player.role.id === role.id)) {
          availableRoles.push(role);
        }
      });
      availableRoles.push({});
      return availableRoles;
    },
    ...mapState(["modals"])
  },
  data() {
    return {
      tab: "editionRoles"
    };
  },
  methods: {
    setRole(role) {
      this.$store.commit("players/setInfo", { role });
      this.$store.commit("toggleModal", "info");
    },
    close() {
      this.toggleModal("info");
    },
    ...mapMutations(["toggleModal"])
  }
};
</script>

<style scoped lang="scss">
@import "../../vars.scss";

ul.tokens li {
  border-radius: 50%;
  width: 6vw;
  margin: 1%;
  transition: transform 500ms ease;

  &.townsfolk {
    box-shadow: 0 0 10px $townsfolk, 0 0 10px #004cff;
  }
  &.outsider {
    box-shadow: 0 0 10px $outsider, 0 0 10px $outsider;
  }
  &.minion {
    box-shadow: 0 0 10px $minion, 0 0 10px $minion;
  }
  &.demon {
    box-shadow: 0 0 10px $demon, 0 0 10px $demon;
  }
  &.traveler {
    box-shadow: 0 0 10px $traveler, 0 0 10px $traveler;
  }
  &:hover {
    transform: scale(1.2);
    z-index: 10;
  }
}

#townsquare.spectator ul.tokens li.traveler {
  display: none;
}
</style>
