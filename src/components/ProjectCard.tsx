import React from 'react'
import { Box, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/interfaces'
import { Badge } from './ui/badge'

export const ProjectCard: React.FC<Project> = ({ name, company, description, repoUrl, projectUrl, technologies }) => {

  return (
    <Card className='max-w-md mx-auto h-full flex flex-col'>
      <CardHeader className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Box/>
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>
              { name }
            </CardTitle>
            <CardDescription>{ company }</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {
            projectUrl && (
              <Button variant='outline' size='sm' asChild>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <Globe />
                </a>
              </Button>
            )
          }
          {
            repoUrl && (
              <Button variant='outline' size='sm' asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg" alt="Github" width={15} />
                </a>
              </Button>
            )
          }
          </div>
      </CardHeader>
      <CardContent className='space-y-6 text-sm'>
        {/* <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-6.png?width=350&format=auto'
          alt='Banner'
          className='aspect-video w-full rounded-md object-cover'
        /> */}
        <p>{ description }</p>
      </CardContent>
      <CardFooter className='flex flex-wrap gap-2'>
        {
          technologies.map( tech => (
            <Badge key={tech} className="px-2 py-1 text-sm font-medium hover:bg-primary/50">{ tech }</Badge>
          ))
        }
      </CardFooter>
    </Card>
  )
}