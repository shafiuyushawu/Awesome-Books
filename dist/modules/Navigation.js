const viewList = document.getElementById('viewList')
const addNew = document.getElementById('addNew')
const Contact = document.getElementById('Contact')

const bookCont = document.getElementById('bookCont')
const addForm = document.getElementById('addForm')
const ContactMe = document.getElementById('ContactMe')


export default function Navigation() {
    viewList.addEventListener('click', () => {
        bookCont.className = 'block'
        addForm.className = 'hidden'
        ContactMe.className = 'hidden'
    })

    addNew.addEventListener('click', () => {
        bookCont.className = 'hidden'
        addForm.className = 'block'
        ContactMe.className = 'hidden'
    })

    Contact.addEventListener('click', () => {
        bookCont.className = 'hidden'
        addForm.className = 'hidden'
        ContactMe.className = 'block'
    })
} 