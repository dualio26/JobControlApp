<template>
    <ul class="bg-gray-300 m-0 p-0 w-3/12 md:w-1/12 list-none hidden md:block fixed h-full overflow-auto">
        <li><a class="active" href="#home">Home</a></li>
        <li class="absolute bottom-0 w-full"><a href="#about"><img src="../images/IDTemplate.png" alt="" class="w-full md:w-7/12 m-auto pb-2"></a></li>
    </ul>
</template>

<style>
li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #04AA6D;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>