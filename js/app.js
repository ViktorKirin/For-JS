
// №1 просто подключить

 function validateEmail(email){
        return true
     }
    

// №2 добавить проверку на длинну строки, строока должна менее содержать меньше 5 символов


    function validateEmail(email){
           if (email === '') return false
           if (typeof email != 'string') return false
           if (!email.split('').includes('@') || email.split('')[0] === '@') return false
           // число символов больше 5
           if (email.length < 5) return false
           // две @
           let positionDog = email.indexOf('@')
           if (email.includes('@',positionDog + 1) ) return false
           // Нет Точки после @
            if (!email.includes('.',positionDog) ) return false
          // Точка перед @
              if (email.includes('.@'))  return false 
            return true
    }       
    
