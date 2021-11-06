import TextContent, { TextContentProps } from 'components/TextContent'

export type HiProps = {
  items: TextContentProps[]
}

const Hi = ({ items }: HiProps) => (
  <>
    {items.map((item, index) => (
      <TextContent key={index} {...item} />
    ))}
  </>
)

export default Hi
