
const Index = () => {
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 ">AI Assistance</h2>
            <div className="mt-10 ">
              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6">About</label>
                <div className="mt-2">
                  <textarea id="about" name="about" rows={3} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Index