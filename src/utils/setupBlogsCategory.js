const setupBlogsCategory = categories => {
    const allCategory = {}
  
    categories.forEach(category => {
        let newCategory = category.categories.nodes
        if(newCategory !== null){
            newCategory.forEach(element => {
                if (allCategory[element.name]) {
                    allCategory[element.name] = allCategory[element.name] + 1
                  } else {
                    allCategory[element.name] = 1
                  }

            });
        }
 
        })
      
        const newTags = Object.entries(allCategory).sort((key, value) => {
          const [firstTag] = key
          const [secondTag] = value
          return firstTag.localeCompare(secondTag)
        })
      
        return newTags
}

export default setupBlogsCategory