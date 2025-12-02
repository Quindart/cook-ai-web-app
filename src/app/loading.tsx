import Spinner from '~/components/ui/spinner'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex size-full items-center justify-center">
      <Spinner className="size-10" />
    </div>
  )
}
