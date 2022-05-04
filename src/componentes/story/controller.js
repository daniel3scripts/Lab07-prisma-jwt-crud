///

let stories = [{
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
    description: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",
}, ];


// METHOD: GET
export const list = (req, res) => {

    return res.status(200).json({
        ok: true,
        data: stories,
    });
};


// METHOD: POST
export const store = (req, res) => {

    const body = req.body;
    body.id = stories.length + 1;
    stories.push(body);

    return res.status(201).json({
        ok: true,
        data: "Store Success",
    });
};


// METHOD: PUT
export const update = (req, res) => {

    let id_story = +req.params.id;
    let body_story = req.body;
    let indice = stories.findIndex((story) => story.id === id_story);
    let change = { id: id_story, ...body_story };
    stories[indice] = change;

    return res.status(200).json({
        ok: true,
        data: "Story actualizada",
        change,
    });

};


// METHOD: DELETE
export const destroy = (req, res) => {

    const { id } = req.params;
    stories = stories.filter((story) => story.id != id);
    return res.status(201).json({
        ok: true,
        data: "Story eliminada",
        stories,
    });
};