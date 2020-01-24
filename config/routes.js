const express=require('express')
const router=express.Router()
const customersController=require('../app/controllers/customersController')
const departmentsController=require('../app/controllers/departmentsController')
const employeesController= require('../app/controllers/employeesController')
const ticketsController=require('../app/controllers/ticketsController')
const userController=require('../app/controllers/userController')
const {authenticate}=require('../app/middlewares/authenticate')

router.get('/customers',authenticate, customersController.list)
router.post('/customers',authenticate, customersController.create)
router.get('/customers/:id',authenticate, customersController.show)
router.put('/customers/:id',authenticate, customersController.update)
router.delete('/customers/:id',authenticate, customersController.destroy)

router.get('/departments',authenticate, departmentsController.list)
router.post('/departments',authenticate, departmentsController.create)
router.get('/departments/:id',authenticate, departmentsController.show)
router.put('/departments/:id',authenticate, departmentsController.update)
router.delete('/departments/:id',authenticate, departmentsController.destroy)

router.get('/employees',authenticate, employeesController.list)
router.post('/employees',authenticate, employeesController.create)
router.get('/employees/:id',authenticate, employeesController.show)
router.put('/employees/:id',authenticate, employeesController.update)
router.delete('/employees/:id',authenticate, employeesController.destroy)

router.get('/tickets', authenticate, ticketsController.list)
router.post('/tickets', authenticate, ticketsController.create)
router.get('/tickets/:id', authenticate, ticketsController.show)
router.put('/tickets/:id',authenticate, ticketsController.update)
router.delete('/tickets/:id', authenticate, ticketsController.destroy)

//user
router.post('/users/register',userController.create)
router.post('/users/login', userController.login)
router.get('/users/account',authenticate, userController.account)
router.delete('/users/logout',authenticate, userController.logout)

module.exports=router