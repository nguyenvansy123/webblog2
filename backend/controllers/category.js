const Category = require("../models/category");
const slugify = require("slugify");
const shortid = require("shortid");


exports.getCategories = (req, res) => {
    Category.find({})
        .exec((error, categories) => {
            if (error) return res.status(400).json({ error })

            if (categories) {
                res.status(200).json({ categories })
            }
        })
}

exports.addCategory = (req, res) => {

    // console.log(req);
    const categoryObj = {
        name: req.body.name,
        slug: `${slugify(req.body.name)}-${shortid.generate()}`,
        createdBy: req.user._id
    }

    const cat = new Category(categoryObj);

    cat.save((error, category) => {
        if (error) return res.status(400).json({ error })

        if (category) {
            return res.status(201).json({ category })
        }
    })
}




exports.updateCategories = async (req, res) => {

    const { ids } = req.body
    const updateCategories = []
    for (let i = 0; i < ids.length; i++) {
        const category = {
            name: ids[i].name,
            slug: `${slugify(ids[i].name)}-${shortid.generate()}`,
            createdBy: req.user._id
        }

        const updateCategory = await Category.findByIdAndUpdate(ids[i]._id, category, { new: true })

        updateCategories.push(updateCategory)
    }


    if (updateCategories.length == ids.length) {
        return res.status(201).json({ updateCategories })
    } else {
        res.status(400).json({ message: "Something went wrong" });
    }




}

exports.deleteCategories = async (req, res) => {
    const { ids } = req.body

    const deletedCategories = [];
    for (let i = 0; i < ids.length; i++) {
        const deleteCategory = await Category.findByIdAndDelete({
            _id: ids[i]._id,
            createdBy: req.user._id,
        })
        deletedCategories.push(deleteCategory);
    }

    if (deletedCategories.length == ids.length) {
        res.status(201).json({ message: "Categories removed" });
    } else {
        res.status(400).json({ message: "Something went wrong" });
    }

}


