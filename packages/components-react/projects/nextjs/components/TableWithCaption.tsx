import {
  PButtonPure,
  PTable,
  PTableBody,
  PTableCell,
  PTableHead,
  PTableHeadCell,
  PTableHeadRow,
  PTableRow,
} from '@porsche-design-system/components-react/ssr';
import Image from 'next/image';
import { headVrt as head, dataVrt as data } from '@porsche-design-system/shared';

// NOTE: this is component is duplicated and adjusted from react
export const TableWithCaption = (): JSX.Element => {
  return (
    <PTable caption="Some caption">
      <PTableHead>
        <PTableHeadRow>
          {head.map((item, i) => (
            <PTableHeadCell
              key={i}
              sort={item}
              hideLabel={item.hideLabel}
              multiline={item.multiline}
              style={item.style}
            >
              <span dangerouslySetInnerHTML={{ __html: item.name }} />
            </PTableHeadCell>
          ))}
        </PTableHeadRow>
      </PTableHead>
      <PTableBody>
        {data.map((item, i) => (
          <PTableRow key={i}>
            <PTableCell>
              <Image
                src={item.imageUrl}
                width={item.imageWidth}
                height={item.imageHeight}
                style={{ marginRight: '.5rem' }}
                alt=""
              />
              <span dangerouslySetInnerHTML={{ __html: item.html }} />
            </PTableCell>
            <PTableCell multiline={true}>{item.longText}</PTableCell>
            <PTableCell>{item.shortText}</PTableCell>
            <PTableCell>{item.shortText}</PTableCell>
            <PTableCell>{item.shortText}</PTableCell>
            <PTableCell>
              <PButtonPure icon="edit" style={{ padding: '.5rem' }}>
                Edit
              </PButtonPure>
              <PButtonPure icon="delete" style={{ padding: '.5rem' }}>
                Delete
              </PButtonPure>
            </PTableCell>
          </PTableRow>
        ))}
      </PTableBody>
    </PTable>
  );
};
