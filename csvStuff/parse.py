import json

def pp_json(json_thing, saveFile, sort=True, indents=4):
    jsonResult = ''
    if type(json_thing) is str:
        jsonResult =(json.dumps(json.loads(json_thing), sort_keys=sort, indent=indents))
    else:
        jsonResult =(json.dumps(json_thing, sort_keys=sort, indent=indents))
        
    with open(saveFile, "w") as fileToSave:
        fileToSave.write(jsonResult)
    # print(jsonResult)
    return None

with open("Anchor - DMC - Circulo - anchor-dmc3.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        anchorColor = separated[1]
        dmcColor = separated[2]
        list.append({dmc: dmcColor, anchor: anchorColor})
        
    pp_json(list, "anchorToDmc3.json")

with open("Anchor - DMC - Circulo - anchor-dmc2.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        anchorColor = separated[1]
        dmcColor = separated[2]
        dmcColor = dmcColor.replace('\n', '')
        list.append({dmc: dmcColor, anchor: anchorColor})
        
    pp_json(list, "anchorToDmc2.json")

with open("Anchor - DMC - Circulo - anchor-dmc1.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        anchorColor = separated[1]
        dmcColor = separated[2]
        dmcColor = dmcColor.replace('\n', '')
        list.append({dmc: dmcColor, anchor: anchorColor})
        
    pp_json(list, "anchorToDmc1.json")

with open("Anchor - DMC - Circulo - anchor-dmc4 com cor.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        anchorColor = separated[0]
        dmcColor = separated[1]
        dmcColor = dmcColor.replace('\n', '')
        list.append({dmc: dmcColor, anchor: anchorColor})
        
    pp_json(list, "anchorToDmc4.json")

with open("Anchor - DMC - Circulo - anchor-circulo.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        anchorColor = separated[1]
        circuloColor = separated[2]
        circuloColor = circuloColor.replace('\n', '')
        list.append({circulo: circuloColor, anchor: anchorColor})
        
    # pp_json(list, "anchorToCirculo.json")


with open("Anchor - DMC - Circulo - circulo-dmc.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        circuloColor = separated[1]
        dmcColor = separated[2]
        dmcColor = dmcColor.replace('\n', '')
        list.append({circulo: circuloColor, dmc: dmcColor})
        
    # pp_json(list, "circuloToDmc.json")


with open("Anchor - DMC - Circulo - Cores DMC.csv") as anchorFile:
    isFirst = True
    list = []
    for line in anchorFile.readlines():
        if (isFirst):
            isFirst = False
            continue
        separated = line.split(',')
        dmcColor = separated[0]
        hexColor = separated[1]
        hexColor = hexColor.replace('\n', '')
        list.append({hex: hexColor, dmc: dmcColor})
        
    pp_json(list, "dmcCores.json")