<script setup>

const page = 'staff_management'
const page_lvl = 'lvl3'

//* *********************************** *//

import { onMounted } from 'vue'
import Header from '@/components/header/MainHeader.vue'
import { useStoreStateStore } from '@/stores/store_state'
import { useFunnelStateStore } from '@/stores/funnel_state'

const store_state = useStoreStateStore()
const funnel_state = useFunnelStateStore()

onMounted(() => {
  if (store_state){
   store_state.setCurrentView(page)
   store_state.setCurrentPageLvl(page_lvl)
  }
})

</script>

<template>
  <main>
    <Header />

    <div class="body">
      <div class="container">
        <div class="inventory-header">
          <div class="header-left">
            <div class="heading">Manage Staff</div>
          </div>
          <div class="header-right" v-if="funnel_state.manager_edit_mode">
            <Router-Link  to="/messages" id="manage">Messages</Router-Link>
            <Router-Link to="/reports/payroll" id="payroll">PayRoll</Router-Link>
          </div>
        </div>
        <div class="inventory-body">
          <div class="product-filters">
            <div class="filters-left">
              <div id="searchBar">
                <input class="searchInput" type="text" placeholder="Search Employees">
                <div class="search-decoration"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
              </div>
            </div>
            <div class="filters-right">
              <div id="addProduct" v-if="funnel_state.manager_edit_mode"><font-awesome-icon icon="fa-solid fa-plus" /> Add Employee</div>
            </div>
          </div>

          <div class="item-container">
            <div class="item-list-head">
              <div class="item-left">
                <div class="edit-btn"></div>
                <div class="title">Employee Name</div>
              </div>
              <div class="item-right">
                <div class="empTitle">Title</div>
                <div class="userID">User ID</div>
                <div class="availability">Active</div>
              </div>
            </div>

            <div class="item">
              <div class="item-left">
                <div class="edit-btn"><font-awesome-icon v-if="funnel_state.manager_edit_mode" icon="fa-solid fa-gear" /></div>
                <div class="title">Jane Doe</div>
              </div>
              <div class="item-right">
                <div class="empTitle">Assistant Manager</div>
                <div class="userID">3431</div>
                <div class="availability">
                  <span class="available"><font-awesome-icon icon="fa-solid fa-square-check" /></span>
                  <span class="not-available" style="display: none;"><font-awesome-icon icon="fa-solid fa-square-xmark" /></span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <div class="edit-btn"><font-awesome-icon v-if="funnel_state.manager_edit_mode" icon="fa-solid fa-gear" /></div>
                <div class="title">Jane Doe</div>
              </div>
              <div class="item-right">
                <div class="empTitle">Assistant Manager</div>
                <div class="userID">3431</div>
                <div class="availability">
                  <span class="available"><font-awesome-icon icon="fa-solid fa-square-check" /></span>
                  <span class="not-available" style="display: none;"><font-awesome-icon icon="fa-solid fa-square-xmark" /></span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <div class="edit-btn"><font-awesome-icon v-if="funnel_state.manager_edit_mode" icon="fa-solid fa-gear" /></div>
                <div class="title">Jane Doe</div>
              </div>
              <div class="item-right">
                <div class="empTitle">Assistant Manager</div>
                <div class="userID">3431</div>
                <div class="availability">
                  <span class="available"><font-awesome-icon icon="fa-solid fa-square-check" /></span>
                  <span class="not-available" style="display: none;"><font-awesome-icon icon="fa-solid fa-square-xmark" /></span>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.body .container {
  min-height: 640px;
  max-width: 1280px;
}
.inventory-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-white);
  margin-bottom: 60px;
}
.inventory-header a{
    text-decoration: none;
}
.header-right{
  display: flex;
  column-gap: 15px;
  justify-content: flex-end;
  min-height: 55px;
}
.header-left{
  min-height: 55px;
}
.heading{
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  color: #fff;
}
#manage, #payroll{
  width: 200px;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border: thick double #000;
  cursor: pointer;
  color: rgba(255,255,255,0.9);
  background-color: var(--color-blue-light);
  transition: 0.1s all;
}
#payroll{
  background-color: var(--color-green);
}
#manage:hover{
  background-color: var(--color-blue-dark);
}
#payroll:hover{
  background-color: var(--color-green-dark);
}
#addProduct{
  width: 160px;
  min-height: 42px;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  border: 5px double var(--color-black);
  color: rgba(0,0,0,0.8);
  background-color: var(--color-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  transition: 0.1s all;
}
#addProduct svg{
  font-size: 10px;
}
#addProduct:hover{
  background-color: rgba(255,255,255,0.85);
}
.product-filters{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-filters > div{
  flex-basis: 50%;
}
.filters-left{
  display: flex;
  align-items: center;
  column-gap: 15px;
}
.filters-right{
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  align-items: center;
}

input[type="text"],
select{
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(255,255,255,0.9);
  color: var(--color-black);
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  min-height: 42px;
}

input::placeholder{
  opacity: 1;
}
#searchBar{
  display: block;
  width: 100%;
  max-width: 350px;
  position: relative;
}
#searchBar input[type="text"]{
  min-height: 42px;
  padding-left: 50px;
  cursor: text;
}
#searchBar .search-decoration{
  position: absolute;
  width: 40px;
  top: 0;
  padding: 10px 20px;
  color: var(--color-red-dark);
  text-align: center;
  left: 0; 
  font-size: 14px;
}

.item-container{
  background-color: rgba(255, 255, 255, 0.55);
  margin-top: 40px;
  padding: 25px;
  opacity: 0.8;
  width: 100%;
  border: 3px solid var(--color-black);
  border-radius: 10px;
  transition: 0.3s all;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);
}
.item-container .item{
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;
  border-radius: 6px;
  border: 0.75px solid var(--color-black);  
  margin-bottom: 15px;
}
.item-container > :last-child{
  margin-bottom: 0;
}
.item-container .item div{
  font-size: 12px;
}
.item-container .item,
.item-container .item-list-head{
  color: var(--color-black);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
}
.item-container .item > div,
.item-container .item-list-head > div{
  flex-basis: 50%;
}
.item .item-left,
.item-container .item-list-head .item-left,
.item-container .item-list-head .item-right,
.item .item-right{
  display: flex;
  align-items: center;
}
.item-container .item-list-head .item-right,
.item .item-right{
  justify-content: flex-end;
  column-gap: 30px;
}
.item-container .edit-btn{
  min-width: 40px;
}
.item-container .item-list-head .item-right > div,
.item .item-right > div{
  min-width: 120px;
  text-align: center;
}
.item-container .item-list-head .item-right > div.empTitle,
.item .item-right > div.empTitle{
  min-width: 200px;
  text-align: left;
}
.item-container .item-list-head .item-right > div.category,
.item .item-right > div.category{
  min-width: 160px;
}
.item-list-head div{
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
}
.item .title{
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}
.availability svg,
.edit-btn svg{
  font-size: 18px;
  margin-bottom: -3px;
  line-height: 16px;
}
.edit-btn svg{
  font-size: 16px;
  margin-bottom: -2px;
  color: rgba(0,0,0,0.9);
  transition: 0.3s all;
  cursor: pointer;
}
.edit-btn svg:hover{
  transform: rotate(90deg);
}
.availability .available{
  color: var(--color-green);
}
.availability .not-available{
  color: #696969;
}
</style>
