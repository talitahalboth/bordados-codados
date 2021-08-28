import { createStyles, makeStyles, Theme, TextField, TextFieldProps } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'

import { getAnchorAndDmcList } from '../utils/anchorAndDmc'
import { getAnchorColourList } from '../utils/anchorColour'
import { getDmcColourList } from '../utils/dmcColour'
import { anchorImages } from '../__fixtures__/coresAnchor'
import { dmcImages } from '../__fixtures__/coresDmc'
import type { ComparisonElements } from './SideBySideList'
import SideBySideList from './SideBySideList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignSelf: 'center',
    },
    margin: {
      width: '100%',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
    },
  }),
);

interface LabelAndColour {
  label: string
  colour: string
}

const AnchorToDmc = () => {

  const classes = useStyles()
  const sorted = getAnchorAndDmcList()
    .filter((element) => element.dmc !== 'N/A' && element.anchor !== 'N/A')
    .map((element): ComparisonElements => {
      return {
        elementA: element.anchor,
        elementB: element.dmc,
      }
    })

  const dmcColourList = getDmcColourList()
  const anchorColourList = getAnchorColourList()

  const mapAnchor = anchorImages()
  const mapDmc = dmcImages()

  const anchorAndDms = new Set<string>()


  sorted.forEach((element) => {
    anchorAndDms.add(`Anchor ${element.elementA}`,)
    anchorAndDms.add(`DMC ${element.elementB}`)
  })

  const options: LabelAndColour[] = []


  anchorAndDms.forEach((element) => {
    if (element[0] === 'A')
      options.push({ label: element, colour: anchorColourList.get(element.split(' ')[1]) ?? 'none' })
    else
      options.push({ label: element, colour: anchorColourList.get(element.split(' ')[1]) ?? 'none' })
  })

  return (
    <div>
      <div style={{ padding: '10px' }}>

        <Autocomplete
          className={classes.margin}
          id="combo-box-demo"
          options={options}
          getOptionLabel={(item: LabelAndColour) => item.label}
          renderOption={(option) => (
            <React.Fragment>
              {option.label}
              {option.colour !== 'none' &&
                <FiberManualRecord
                  fontSize="small"
                  style={{
                    color: option.colour
                  }}
                />
              }

            </React.Fragment>
          )}
          style={{ width: 300 }}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField  {...params} label="Search a Colour" variant="outlined" />}
        />
        {/* <TextField
          variant="outlined"
          label="Find a Colour"
          id="standard-start-adornment"
          className={classes.margin}
        /> */}
      </div>

      <SideBySideList
        sortedElementList={sorted}
        elementAColourListMap={anchorColourList}
        elementBColourListMap={dmcColourList}
        elementAImages={mapAnchor}
        elementBImages={mapDmc}
        elementALabel="Anchor"
        elementBLabel="DMC"
      />
    </div>
  )
}

export default AnchorToDmc
