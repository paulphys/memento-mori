import type { NextPage } from 'next'
import Head from 'next/head'
import { addWeeks, isPast } from 'date-fns'

const Index: NextPage = () => {

  const lifeCalendar = []
  // Start the date on your birthday (YYYY-MM-DD)
  let prevDate = new Date('1999-09-09')

  // Create x rows depending on your life expectancy
  for (let i = 0; i < 80; i++) {
    // Create a year
    const year = []

    // Fill year with weeks
    for (let j = 0; j < 52; j++) {
      prevDate = addWeeks(new Date(prevDate), 1)
      year.push({ date: prevDate })
    }

    lifeCalendar.push(year)
  }

  return (
    <>
    <Head>
        <title>Memento Mori</title>
    </Head>

    <div className="py-32 mx-auto max-w-2xl px-6 md:px-0 select-none">
      <h1 className="text-3xl mb-12">My Life in Weeks</h1>
      <section>
        <div className="space-y-2 w-full pt-2">
          {lifeCalendar.map((year, i) => (
            <div key={year.toString()} className="grid gap-1 w-full relative">
              {i % 4 === 0 && (
                <div className="hidden sm:block absolute text-xs -mt-1 -ml-5 text-right w-4 text-stone-500 dark:text-gray">
                  {i}
                </div>
              )}

              {year.map((week) => (
                <div
                  key={week.date.toISOString()}
                  className={`h-1 w-1 rounded-full sm:h-2 sm:w-2 border border-stone-400 ${
                    isPast(week.date) ? 'bg-green-500 border-none' : ''
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </section>
      </div>
      <style jsx>{`
        .grid {
          grid-template-columns: repeat(52, minmax(0, 1fr));
        }
      `}</style>
    </>
  )
}

export default Index
