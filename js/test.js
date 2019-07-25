      var cone = vtk.Filters.Sources.vtkConeSource.newInstance();  
      var mapper = vtk.Rendering.Core.vtkMapper.newInstance();  
      var actor = vtk.Rendering.Core.vtkActor.newInstance();  
      mapper.setInputConnection(cone.getOutputPort());  
      actor.setMapper(mapper);  
    
      var fullRender = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance();  
      var render = fullRender.getRenderer();  
      render.addActor(actor);  
      render.resetCamera();  
    
      var renderWindow = fullRender.getRenderWindow();  
      renderWindow.render();  