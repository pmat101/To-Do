document.querySelector(".input_div .addButton").addEventListener("click", addToDo);

function addToDo() {
    let item = document.createElement("div");
    let itemText = document.createElement("p");
    let option = document.createElement("div");
    let edit_b = document.createElement("span");
    let delete_b = document.createElement("span");
    item.setAttribute("class", "item");
    item.style.display = "flex";
    itemText.setAttribute("class", "item_input");
    edit_b.setAttribute("class", "editButton");
    delete_b.setAttribute("class", "deleteButton");
    itemText.innerText = document.querySelector(".input").value;
    edit_b.innerText = "EDIT";
    delete_b.innerText = "DELETE";
    option.appendChild(edit_b);
    option.appendChild(delete_b);
    item.appendChild(itemText);
    item.appendChild(option);
    document.querySelector(".container").appendChild(item);
    document.querySelector(".input").value = "";

    document.querySelector(".deleteButton").addEventListener("click", function () {
        document.querySelector(".item").remove();
    });

    document.querySelector(".editButton").addEventListener("click", function () {
        document.querySelector(".input").value = document.querySelector(".item_input").innerText;
        document.querySelector(".item").remove();
    });

}
