<template>
  <div class="article">
    <div class="article-main">
      <div class="title">
        <a :href="article.link" target="_blank">
          <h3>{{ article.title }}</h3>
        </a>
      </div>
      <div class="body">
        <p class="content" v-html="article.content"></p>
      </div>
      <div class="footer">
        <span class="hostname">{{ this.getHostname() }}</span>
        <span v-if="article.isoDate" class="middot">&bull;</span>
        <span class="datetime">{{ this.getDateTime() }}</span>
      </div>
    </div>
    <div class="article-tags">
      <Tags/>
    </div>
    <button
      class="favorite"
      v-bind:class="{'favorite-on': isFavorite, 'favorite-off': !isFavorite}"
      v-on:click="changeFavorite()"
    ></button>
  </div>
</template>

<script>
import Tags from "./tags/Tags.vue";

const parseDate = tdate => {
  const systemDate = new Date(Date.parse(tdate));
  const userDate = new Date();

  const diff = Math.floor((userDate - systemDate) / 1000);
  if (diff < 59) {
    return diff + "s";
  }

  if (diff <= 3540) {
    return Math.round(diff / 60) + "m";
  }

  if (diff <= 86400) {
    return Math.round(diff / 3600) + "h";
  }

  if (diff < 604800) {
    return Math.round(diff / 86400) + "d";
  }

  return systemDate.toString().substring(4, 10);
};

export default {
  name: "Article",
  props: ["article"],
  components: {
    Tags
  },
  data() {
    return {
      isFavorite: false
    };
  },
  methods: {
    getHostname() {
      try {
        const urlObj = new URL(this.article.link);
        return urlObj.hostname.replace("www.", "").replace("ww2.", "");
      } catch (e) {
        console.error(e.toString());
      }
    },
    getDateTime() {
      if (this.article.isoDate) {
        return parseDate(this.article.isoDate);
      }
    },
    changeFavorite() {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
      } else {
      }
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
}

.article {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1.25rem;
  margin-bottom: 15px;
}

.body .content {
  margin-top: 5px;
}

.footer {
  font-size: 13px;
  color: #777;
  display: flex;
  align-items: flex-end;
}

.middot {
  font-size: 12px;
  margin: 0 8px;
}

a {
  color: #42b983;
}

.article-tags {
  position: absolute;
  width: 33%;
  right: 0;
}
.article-main {
  width: 66%;
}

.favorite {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.favorite-on {
  background: url("../../../assets/star_on.png") transparent;
  height: 50px;
  width: 50px;
  border: none;
}

.favorite-off {
  background: url("../../../assets/star_off.png") transparent;
  height: 50px;
  width: 50px;
  border: none;
}

button:focus {
    outline: 0px;
}
</style>
