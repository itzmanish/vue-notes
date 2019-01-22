<template>
  <div>
    <header class="page-header collapse">
      <div class="nav-container">
        <div class="nav-left">
          <div class="logo">
            <a
              href="/"
              class="router-link-active"
            >
              <span>TooDoo</span>
            </a>
          </div>
          <i class="icon icon-menu nav-icon"></i>
        </div>
        <div class="nav-right">
          <at-button
            class="btn"
            type="primary"
          >Login</at-button>
        </div>
      </div>
    </header>
    <!-- <div class="page-sub-header border">
      <div class="nav-container">
        <div class="nav-right">
          <ul class="navbar">
            <li>
              <a href="#/en/docs/" class="router-link-active">Component</a>
            </li>
            <li>
              <a href="#" class>Travel</a>
            </li>
            <li>
              <a href="#" class>Fashion</a>
            </li>
            <li>
              <a href="#" class>Development</a>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
  </div>
</template>
<style scoped>
.page-sub-header {
  position: relative;
  top: 60px;
  left: 0px;
  width: 100%;
  height: 40px;
  transition: all 0.3s;
}
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  transition: all 0.3s;
  z-index: 100;
}
.page-header.collapse {
  background-color: #fff;
  opacity: 0.98;
}
.page-header.open {
  background-color: #fff;
}
.nav-container {
  margin: 0 auto;
  width: 80%;
  color: #1d1d1f;
}
.nav-container .nav-left {
  float: left;
}
.nav-container .nav-left .logo {
  position: relative;
  height: 60px;
  line-height: 60px;
}
.nav-container .nav-left .logo img {
  position: absolute;
  top: 50%;
  margin-top: -15px;
  width: 30px;
  height: 30px;
}
.nav-container .nav-left .logo span {
  color: #3473e7;
  font-weight: bold;
  font-size: 16px;
}
.nav-container .nav-left .nav-icon {
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -10px;
  font-size: 20px;
}
.nav-container .nav-right {
  float: right;
}
.nav-container .nav-right .navbar {
  display: inline-block;
  margin: 0;
  margin-right: 100px;
  padding: 0;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  list-style-type: none;
}
.nav-container .nav-right .navbar a {
  display: inline-block;
  color: #1d1d1f;
}
.nav-container .nav-right .navbar a::after {
  /* content: ""; */
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #6190e8;
}
.nav-container .nav-right .navbar a.router-link-active {
  color: #6190e8;
}
.nav-container .nav-right .navbar a.router-link-active::after {
  display: inline-block;
}
.nav-container .nav-right .navbar li {
  position: relative;
  display: inline-block;
  margin: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
}
.nav-container .nav-right .navbar li:hover {
  color: #6190e8;
}
.nav-container .nav-right .navbar li:hover a {
  color: #6190e8;
}
.nav-container .nav-right .navbar li.disabled {
  color: #c9c9c9;
  cursor: not-allowed;
}
.nav-container .nav-right .btn {
  display: inline-block;
  margin: 12px 24px;
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .page-header {
    height: 40px;
  }
  .page-header.open .nav-right {
    height: 220px;
  }
  .nav-container {
    width: initial;
  }
  .nav-container .nav-left {
    position: relative;
    margin: 0 20px;
    float: none;
    text-align: center;
  }
  .nav-container .nav-left .logo {
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }
  .nav-container .nav-left .nav-icon {
    display: inline-block;
  }
  .nav-container .nav-right {
    float: none;
    height: 0;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 10px 20px 0 rgba(29, 29, 31, 0.07);
    transition: all 0.3s;
    overflow: hidden;
  }
  .nav-container .nav-right .navbar {
    display: block;
    height: initial;
    line-height: 30px;
  }
  .nav-container .nav-right .navbar li {
    display: block;
  }
  .nav-container .nav-right .navbar a {
    width: 100%;
  }
  .nav-container .nav-right .navbar a.router-link-active::after {
    display: none;
  }
  .nav-container .nav-right .btn {
    margin: 16px;
  }
}
</style>
