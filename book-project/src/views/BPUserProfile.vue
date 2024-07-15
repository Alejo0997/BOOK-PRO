<template>
  <div class="bp-user-profile">
    <div class="title-container"><h1>Mi Perfil</h1></div>

    <div class="profile-section">
      <img class="cover-photo" :src="coverPhoto" alt="Cover Photo" />
      <div class="profile-header">
        <div class="profile-info">
          <div class="profile-container-photo">
            <img class="profile-photo" :src="profilePhoto" alt="Profile Photo" />
          </div>

          <button @click="editProfile" class="edit-button">Editar Perfil</button>
        </div>
      </div>
    </div>
    <div class="books-section">
      <div class="content-buttons">
        <button @click="showReadBooks" :class="{ active: view === 'read' }">Leídos</button>
        <button @click="showInterestedBooks" :class="{ active: view === 'interested' }">
          Me Interesa
        </button>
      </div>
      <div class="book-views">
        <div v-if="view === 'read'">
          <h2>Libros Leídos</h2>
          <ul>
            <li v-for="book in readBooks" :key="book.id">{{ book.title }}</li>
          </ul>
        </div>
        <div v-if="view === 'interested'">
          <h2>Libros que Me Interesan</h2>
          <ul>
            <li v-for="book in interestedBooks" :key="book.id">{{ book.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BPUserProfile',
  data() {
    return {
      view: 'read',
      profilePhoto: 'path/to/profile/photo.jpg',
      coverPhoto: 'path/to/cover/photo.jpg',
      readBooks: [
        { id: 1, title: 'Libro Leído 1' },
        { id: 2, title: 'Libro Leído 2' }
        // más libros leídos
      ],
      interestedBooks: [
        { id: 1, title: 'Libro Interesante 1' },
        { id: 2, title: 'Libro Interesante 2' }
        // más libros interesantes
      ]
    }
  },
  methods: {
    editProfile() {
      // Lógica para editar el perfil
      console.log('Editar Perfil')
    },
    showReadBooks() {
      this.view = 'read'
    },
    showInterestedBooks() {
      this.view = 'interested'
    }
  }
}
</script>

<style scoped>
.bp-user-profile {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #28272a;
  gap: 2em;
  padding: 2em 0 2em 0;
}
.title-container {
  width: 90%;
  text-align: start;
  color: white;
}

.profile-section {
  background-color: #42b983;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  overflow: hidden;
}

.profile-header {
  text-align: center;
}

.cover-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  background-color: #434146;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8em;
  padding: 0 6em 0 0px;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;

  position: absolute;
  bottom: 40px;
}
.profile-container-photo {
  width: 200px;
  height: 200px;
  position: relative;
}

.edit-button {
  margin-left: 20px;
  padding: 10px 20px;
  background-color: #2c89f9;
  color: white;
  border: none;
  border-radius: 5px;
}

.books-section {
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: #434146;
  border-radius: 20px;
  overflow: hidden;
  color: white;
}

.content-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.content-buttons button {
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid black;
  background-color: transparent;
  cursor: pointer;
}

.content-buttons .active {
  background-color: #2c89f9;
  color: white;
}

.book-views {
  overflow-y: auto;
  flex: 1;
}

.book-views h2 {
  text-align: center;
}

.book-views ul {
  list-style: none;
  padding: 0;
}

.book-views li {
  margin: 5px 0;
}
</style>
