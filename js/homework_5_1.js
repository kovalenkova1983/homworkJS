function isEmpty(obj)
 {
    for (let a in obj) // переборка свойств
    {
            return false; // сработает если будет переберать свойства
    }
    return true;
  }