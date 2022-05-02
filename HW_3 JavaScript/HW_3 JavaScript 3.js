// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  
//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
//   **Пример:**
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

//Helpers
const phraseEndings = function(amount, name) {      //расставить окончания
  let nameString = ''
  if (amount == 0) {
    nameString = 'нет ' + name + 'ов' 
  } else if (amount % 10 == 1 && amount != 11) {
    nameString = amount + ' ' + name
  } else if (amount % 10 == 2 || amount % 10 == 3 || amount % 10 == 4 ) {
    nameString = amount + ' ' + name + 'а'
  } else {
    nameString = amount + ' ' + name + 'ов'
  }
return nameString
}

const findDepartment = function(departNumber) {     //найти предприятие по номеру департамента
  let arrayRes //= []
  let counter = 0
  enterprises.forEach((item, index) => {
    if (item.departments) {
      item.departments.forEach((dep, id) => {
        if (+departNumber) {
          if (dep.id == departNumber) {
            counter++
            arrayRes = item       
          } 
        } else {
          if (dep.name == departNumber) {
            counter++
            arrayRes = item  
        } 
        }
      })
    }
  }  )
  counter == 0 ? console.log('No such enterprise') : false
  return arrayRes
  }
  // let a = findDepartment(10)
  // console.log(a, a.id)
  // console.log(a[0].id)
// Version 1
// const personCard = function(enterprises) {
//     enterprises.forEach((item) => {
//       if (item.departments) {
//         let employeeSum = 0
//         let employeeInfo = []
//         item.departments.forEach((elem) => {
//             employeeSum = employeeSum + elem.employees_count 
//             employeeInfo.push('- ' + elem.name + ' ('+ elem.employees_count + ' сотрудников)'+ '\n')
//         })
//     console.log(item.name + ' (' + employeeSum + ' сотрудников)')    
//     console.log(employeeInfo.join(''))
//       }
//   })

// }
// personCard(enterprises)

// Version 2
const personCards = function(enterprises) {
    enterprises.forEach((item) => {
      if (item.departments) {
        let ar = []
        let res = 0
        let a = []
          item.departments.forEach(dept => {
            ar.push(dept.employees_count)
            res = ar.reduce((sum, curr) => sum + curr, 0);
            return a.push('- ' + dept.name + ' (' + phraseEndings(dept.employees_count, 'сотрудник') + ')' + '\n') 
            })
          console.log(item.name + ' (' + phraseEndings(res, 'сотрудник') +')')
          console.log(a.join(''))
          }
      })
    }
    personCards(enterprises)

  
//   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseName = function(searchId) {
  let arrayy = []
  let counter = 0
  enterprises.forEach((item, index) => {
    if (item.departments) {
      item.departments.forEach((dep, id) => {
        if (+searchId) {
          if (dep.id == searchId) {
            console.log(item.name) 
            counter++
          } 
        } else {
          if (dep.name == searchId) {
            console.log(item.name)
            counter++
        } 
        }
      })
    }
  }  )
  counter == 0 ? console.log('No such enterprise') : false
}  
getEnterpriseName("Отдел маркетинга")
getEnterpriseName(10)
getEnterpriseName(111)

  3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  Пример:  addEnterprise("Название нового предприятия")
const addEnterprise = function(enterpriseName) {
    let ar = [] 
    let res
    enterprises.forEach((item) => {
      ar.push(item.id)
      res = ar.reduce((sum, curr) =>  sum > curr ? sum : curr , 0);
    })
    enterprises.push({
      id: res + 1 ,
      name: enterpriseName,
      departments: []
    })
  }
  addEnterprise('enterprise')
  // console.log(enterprises)

//   4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
//   Пример: addDepartment(1, "Название нового отдела")
const addDepartment = function(enterpNumber, departName) {
  let depar = []
  let ar = [] 
  let res
  enterprises.forEach((ent) => {
    depar = enterprises.find(item => item.id == +enterpNumber)
  })
  if (depar) {
      enterprises.forEach((elem,elemId) => {
        if (depar.departments) {  
              elem.departments.forEach((dep) => {
                ar.push(dep.id)
                return res = ar.reduce((sum, curr) =>  sum > curr ? sum : curr , 0);
              })
      } else {
        elem['departments'] = []
        return res = 0
      }
      })
      depar.departments.push({
        id: res + 1 ,
        name: departName,
      })
    } else { console.log('No such enterprise') }
  }
  addDepartment(10, "Название нового отдела")
  // console.log(enterprises)


//   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
//   Пример: editEnterprise(1, "Новое название предприятия")
const editEnterprise = function(enterpNumber, enterpName) {
  let depar = []
  if (!isNaN(+enterpNumber)) {
    enterprises.forEach((ent) => {
      depar = enterprises.find(item => item.id == +enterpNumber)
    })
    if (depar) {
    Object.defineProperty(depar, "name",  {value : enterpName}); 
    } else { console.log('No such enterprise') }
  } else {console.log('Enterprise ID is not a number')}
} 
editEnterprise('aaa', 'new name')
// console.log(enterprises)
//   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
//   Пример:
//   editDepartment(7, "Новое название отдела")

const editDepartment = function(departmentNumber, newDepartName) {
if (!isNaN(+departmentNumber)) {
  let a = 0
  enterprises.forEach((ent, entId) => {
    ent.departments.forEach((dep) => {
      if (dep.id == departmentNumber) {
        Object.defineProperty(dep, "name",  {value : newDepartName}); 
        a++
      } 
    })
  });
  (a == 0) ? console.log('No such department') : false
  } else {console.log('Department ID is not a number')}
}
editDepartment(7, 'NewDepartment')
editDepartment('sss', 'NewDepartment')
editDepartment(25, 'NewDepartment')
// console.log(JSON.stringify(enterprises, null, 4))

//   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
//   Пример: deleteEnterprise(1)
const deleteEnterprise = function(enterpNumber) {
  let a = 0
  if (!isNaN(+enterpNumber)) {
    enterprises.forEach((ent, index) => {
      if (ent.id == enterpNumber) { 
        enterprises.splice(index, 1); 
        a++ }
    });
  (a == 0) ? console.log('No such Enterprise') : false
  } else {console.log('Enterprise ID is not a number')}
} 
deleteEnterprise(5)
// deleteEnterprise(20)
deleteEnterprise('1')
// console.log(enterprises) 

// //   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// //   Пример: deleteDepartment(3)
const deleteDepartment = function(departmentNumber) {
if (!isNaN(+departmentNumber)) {
  let a = 0
  enterprises.forEach((ent, entId) => {
    ent.departments.forEach((dep, index) => {
      if (dep.id == departmentNumber) {
        if (dep.employees_count != 0) {
          // console.log(ent)
          // console.log(dep)
          ent.departments.splice(entId, 1); 
          a++
        } else {console.log('There are ' + dep.employees_count + ' employees in the department')}
      } 
    })
  });
  (a == 0) ? console.log('No such department') : false
  } else {console.log('Department ID is not a number')}
}
deleteDepartment(7)
deleteDepartment('sss')
deleteDepartment(25)
console.log(JSON.stringify(enterprises, null, 4))
  
// //   9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// // В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// //   Пример: moveEmployees(2, 3)

const moveEmployees = function(departFrom, departWhere) {
  let enterpFrom
  let enterpWhere
  let employSum = 0
  if (!isNaN(+departFrom) || !isNaN(+departWhere)) {
      enterpFrom = findDepartment(departFrom)
      enterpWhere = findDepartment(departWhere)
      if (!enterpFrom) {
        console.log('No such department to transfer from')
      } else if (!enterpWhere) {
        console.log('No such department to transfer to')
      } else if (enterpFrom.id !== enterpWhere.id) {
        console.log('You wrote different enterprises')
      } else {
        enterpFrom.departments.forEach((dep) => {
          if (dep.id == departFrom) {
            employSum = dep.employees_count
            dep.employees_count = 0
          }
          if (dep.id == departWhere) {
            console.log(dep.id)
            dep.employees_count += employSum
          }
        })
      }
    } else {console.log('Department ID is not a number')}
  
}  
moveEmployees(7, 8)
// console.log(enterprises)
// moveEmployees(7, 10)

