<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ORD 10.852 Helper</title>
    <script src="./index.js"></script>
    <link rel="stylesheet" href="./style.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div class="d-flex">
        <div class="container-fluid">
            <div class="row" id="main"></div>
        </div>
    </div>
</body>
<script src="watch.js" type="text/javascript"></script>
<script src="./data.js"></script>
<script>
    $(function () {
        var doc = $(this);

        function creatBlock(name, item, isFusionable = true) {
            var main = $("#main");

            var group = $("<div class='group col-1_5 p-2 shadow-lg'></div>");
            var groupname = $("<div class='p-1 bg-white groupname text-center border rounded-top'>" + name + "</div>");
            var itemlist = $("<div class='p-1 bg-white itemlist border rounded-bottom'></div>");

            $.each(item, function (index, value, type = name) {
                let u_name = value.name.toLowerCase().replace(/\ /g, "")
                u_name = u_name.replace(/\./g, "");

                let id = type.toLowerCase() + "_" + u_name + "_" + value.id;
                let item = $("<div class='item justify-content-between'></div>");

                let img = $('<img src="' + value.img + ".png" + '" alt="" class="icon m-1" ">')
                img.on('error', function (e) {
                    this.src = value.img + ".jpg"
                });

                let progress = $("<div class='progress'></div>");
                let progress_bar = $('<div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>');
                progress_bar.css("width", "0%")
                $(progress).append(progress_bar);

                let name = $("<div class='name ml-1'>" + value.name + "</div>");
                let namewrap = $("<div class='namewrap d-flex align-items-center'></div>");
                namewrap.append(img, progress, name);

                let btn = $("<div class='btns ml-1'></div>");

                let btn_count = $("<input type='number' name='count' class='mr-1 p-0 border count' value='0' id='" + id + "' >");
                let btn_minus = $("<div class='btn btn-danger btn-minus mr-1'>-</div>");
                let btn_detail = $('<img src="./img/detail.png" class="icon ml-1 btn-detail" alt="" id="">');

                if (isFusionable) var btn_combine = $("<div class='btn btn-primary btn-combine mr-1'>Fuse</div>");
                else var btn_combine = "";

                // btn.append(btn_count, btn_minus, btn_combine, btn_detail);
                btn.append(btn_count, btn_combine, btn_detail);

                item.append(namewrap, btn);
                itemlist.append(item);

            });

            group.append(groupname, itemlist)
            return group;
            // main.append(group)
        }

        function createColumnBlock(arr) {
            var columnBlock = $("<div class='column-block d-flex flex-column'></div>")
            $.each(arr, function (index, value) {
                $(columnBlock).append(value);
            })
            return columnBlock;
        }

        $(document).on("click", ".namewrap", function () {
            let input = $(this).siblings('.btns').children("input");
            let count = $(input).val();

            // $(input).attr("value", ++count);
            $(input).val(++count)
            $(input).trigger("change");
        });

        // $(document).on("click", ".btn-minus", function () {
        //     let input = $(this).siblings('.count');
        //     let count = $(input).val();

        //     if (count > 0) $(input).attr("value", --count)
        // });

        $(document).on("click", ".count", function () {
            $(this).select()
        })

        $(document).on("keyup change", ".count", function () {
            let id = $(this).attr("id");
            id = id.split("_"); /*  common_wisp_0 */

            data[id[0]].forEach(el => {
                if (el.id == id[2]) el.unit = parseInt($(this).val()) /* change unit count in data */
            });

        })

        function checkDupObjectIdInArr(arr) {
            var result = arr.reduce((unique, o) => {
                if (!unique.some(obj => obj.label === o.label && obj.value === o.value)) {
                    unique.push(o);
                }
                return unique;
            }, []);
            return result
        }

        function findId(id) {
            let temp;
            for (var i in data) {
                data[i].forEach(function (el) {
                    if (el.id == id) {
                        temp = el;
                        return
                    }
                })
            }
            return temp
        }

        function getCurrentSimplestMaterial() {
            let material = {}
            data.common.forEach((el) => {
                material[el.id] = el.unit
            })
            return material;
        }

        function getAmount() {
            let count = 0;
            for (let i in data) {
                data[i].forEach((el) => {
                    count++
                })
            }
            return count;
        }


        var simplest = {};
        var downstream_arr = [];
        function trackRecipe(recipe, resetList = true) {

            if (resetList) {
                simplest = {};
                downstream_arr = [];
            }

            // recipe = checkDupObjectIdInArr(recipe);
            recipe.forEach(el => {
                let ingredient = findId(el.id);
                let id = ingredient.id;
                let unit = ingredient.unit;
                if (ingredient.hierachyLevel <= 1) {
                    /* update value if id already exist - to do */
                    let keys = Object.keys(simplest);

                    if (keys.includes(el.id.toString())) {
                        simplest[el.id.toString()] += el.amount
                    }
                    else simplest[el.id.toString()] = el.amount /* if value not exist*/
                } else {
                    for (var i = 0; i < el.amount; i++)
                        downstream_arr.push(ingredient)
                }

            })

            if (downstream_arr.length) {
                let first_el = downstream_arr.shift();
                trackRecipe(first_el.recipe, false)
            }

            if (downstream_arr.length == 0) {
                return simplest
            }
        }

        function triggerPercentageCalculation(id, prop) {
            let upstream = getUpstreamUnit(id)
            let complete = 0;
            upstream.forEach((e) => {
                let unit = findId(e);
                let insufficientList = generateInsufficentList(unit.recipe)

                if (Object.keys(insufficientList).length) {
                    let total = 0;
                    let insufficient = 0;
                    for (let i in unit.simplest_material) {
                        total += unit.simplest_material[i]
                    }

                    for (let i in insufficientList) {
                        insufficient += insufficientList[i]
                    }
                    complete = 100 - Math.ceil(insufficient / total * 100);
                } else {
                    complete = 100;
                }

                unit.complete = 0;
                unit.complete = complete;


                // console.log(unit.name + "(" + hierachyLevelMapping[unit.hierachyLevel] + "):" + unit.complete + "%")
            })
        }

        var storeList = [];
        var insufficientList = {};
        var i = 0;
        function generateInsufficentList(recipe, reset = true) {
            if (reset) {
                storeList = [];
                insufficientList = {};
            }
            recipe.forEach((el) => {
                let unit = findId(el.id)
                if (unit.unit < el.amount && unit.hierachyLevel > 1) {
                    let count = Math.abs(unit.unit - el.amount);
                    while (count--) {
                        storeList.push(unit)
                    }
                }

                if (unit.hierachyLevel <= 1) {
                    let keys = Object.keys(insufficientList);
                    if (keys.includes(el.id.toString())) {
                        insufficientList[el.id.toString()] += el.amount
                    }
                    else insufficientList[el.id.toString()] = el.amount
                }
            })

            if (storeList.length) {
                let unit = storeList.shift();
                generateInsufficentList(unit.recipe, false);
                return insufficientList
            }


            if (storeList.length == 0) {

                for (let i in insufficientList) {
                    let simplest_material = getCurrentSimplestMaterial();

                    if (simplest_material[i] >= insufficientList[i]) {
                        insufficientList[i] = 0;

                    } else {
                        insufficientList[i] -= simplest_material[i]
                    }
                }
                validateElementWithValue0(insufficientList)
                return insufficientList;
            }
        }

        function validateElementWithValue0(obj) {
            for (let i in obj) {
                if (obj[i] == 0) delete obj[i]
            }
        }

        function generateSimplestMaterial() {
            let count = getAmount()
            for (let i = 0; i < count; i++) {
                let unit = findId(i);
                unit.simplest_material = trackRecipe(unit.recipe)
                unit.complete = 0;
            }

            console.log("-Generate Simplest Material Successfully")
        }

        function getUpstreamUnit(id) {
            let list = [];
            let unit = findId(id);

            for (let i = unit.hierachyLevel + 1; i < Object.keys(hierachyLevelMapping).length; i++) {
                // console.log(hierachyLevelMapping[i])
                data[hierachyLevelMapping[i]].forEach((el) => {
                    let recipe = el.recipe
                    recipe.forEach((ele) => {
                        if (ele.id == id) list.push(el.id)
                    })

                })
            }
            return list
        }

        function addWatcher() { /* Monitor object, property "unit" in detail */
            for (var i in data) {
                data[i].forEach(el => {
                    watch(el, function (prop, action, newvalue, oldvalue) {  /* prop: unit, action: set, use this to retrieve current object */
                        var props = ["unit", "complete"];

                        if (props.includes(prop)) {
                            triggerPercentageCalculation(this.id, _prop = prop)

                            if (prop == "complete") {
                                reflectComplete(this, newvalue)
                            }
                        }
                    })
                })
            }
        }

        function reflectComplete(obj, val) {
            let name = obj.name;
            let temp_name = name.replace(/\ /g, "");
            temp_name = temp_name.replace(/\./g, "");
            console.log(temp_name)
            let type = hierachyLevelMapping[obj.hierachyLevel];
            let id = obj.id;
            let dom = "#" + type + "_" + temp_name.toLowerCase() + "_" + id;
            console.log(dom)

            let progress_bar = $(dom).parents(".btns").siblings(".namewrap").find(".progress-bar");
            let label = $(dom).parents(".btns").siblings(".namewrap").find(".name");

            progress_bar.css("width", val + "%")

            if (val == 100) {
                progress_bar.toggleClass("bg-green")
                $(label).html(name);
            }
            else {
                progress_bar.removeClass("bg-green")
                $(label).html(val + "% " + name);
            }
        }


        $("#main").append(
            createColumnBlock([
                creatBlock("Common", common_unit, false),
                creatBlock("Uncommon", uncommon_unit)
            ])
        );

        $("#main").append(
            creatBlock("Special", special_unit)
        );

        $("#main").append(
            creatBlock("Rare", rare_unit)
        );


        generateSimplestMaterial()
        addWatcher()
    })
</script>

</html>