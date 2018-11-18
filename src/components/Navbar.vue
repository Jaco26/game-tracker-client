<template>
<b-navbar class="mx-0" toggleable type="dark" variant="dark">


    <b-navbar-nav>
      <b-nav-item exact :to="{ name: 'home' }">Home</b-nav-item>
      <b-nav-item exact :to="{ name: 'login' }">Login</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
</b-navbar>

</template>

<script>
export default {
 
}
</script>
