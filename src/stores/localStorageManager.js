const save = (data) => {
   try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem("data", serializedData)
   } catch (err) {
      console.error(err)
   }
};

const load = () => {
   try {
      const rawData = localStorage.getItem("data");
      const unserializeData = JSON.parse(rawData);
      if (unserializeData === null) {
         return {}
      }

      return unserializeData

   } catch (err) {
      console.log("load data has fails")
   }
};

const loadTodoState = () => {
   const serializedState = load();
   const todosState = serializedState.todos;

   if (typeof todosState === "undefined") {
      return {}
   }
   return {
      todos: todosState
   }
};

export {save, loadTodoState}